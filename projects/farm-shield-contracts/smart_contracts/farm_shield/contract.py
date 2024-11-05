from algopy import *
from algosdk import encoding
from typing import Dict, Any

class FarmShield(ARC4Contract):
    policy_id: UInt64
    coverage_price: UInt64
    duration: UInt64
    start_date: UInt64
    end_date: UInt64
    paid_premiums: UInt64
    active: bool
    premium: UInt64
    policy_type: Bytes
    paid: bool
    deductible: UInt64
    policyholder: str

    claims = {
        'claim_id': {
            'farmer_address': str,
            'claim_details': str,
            'status': str,
            'date_submitted': UInt64,
            'policy_id': UInt64
        }
    }

    # create application
    @arc4.abimethod(allow_actions=["NoOp"], create="require")
    def createApplication(self, duration: UInt64, deductible: UInt64, policyholder: str) -> None:
        # Create a crop policy
        self.policy_id = UInt64(0)
        self.coverage_price = UInt64(100000)
        self.duration = duration
        self.start_date = Global.latest_timestamp
        self.end_date = Global.latest_timestamp + duration
        self.paid = False
        self.deductible = deductible
        self.policy_type = Bytes("crop".encode())
        self.policyholder = policyholder

        # Create a livestock policy
        self.policy_id = UInt64(1)
        self.coverage_price = UInt64(100000)
        self.duration = duration
        self.start_date = Global.latest_timestamp
        self.end_date = Global.latest_timestamp + duration
        self.paid = False
        self.deductible = deductible
        self.policy_type = Bytes("livestock".encode())
        self.policyholder = policyholder

    # opt in to asset of the farm shield policy
    @arc4.abimethod
    def optInToAsset(self, mbrPay: gtxn.PaymentTransaction) -> None:
        assert Txn.sender == Global.current_application_address
        assert not Global.current_application_address.is_opted_in(Asset(self.policy_id))
        
        assert mbrPay.receiver == Global.current_application_address
        assert mbrPay.amount == Global.min_balance + Global.asset_opt_in_min_balance
        itxn.AssetTransfer(
            xfer_asset=self.policy_id,
            asset_receiver=Global.current_application_address,
            asset_amount=0,
        ).submit()

    # purchase premium by farmer
    @arc4.abimethod
    def purchase_premium(self, buyerTxn: gtxn.PaymentTransaction, coverage_price: UInt64, policy_type: Bytes) -> None:
        assert self.coverage_price != UInt64(0)
        assert self.paid == False
        assert Txn.sender == buyerTxn.sender
        assert buyerTxn.receiver == Global.current_application_address
        assert buyerTxn.amount == self.coverage_price
        assert policy_type == Bytes("crop".encode()) or policy_type == Bytes("livestock".encode())

        itxn.AssetTransfer(
            xfer_asset=self.policy_id,
            asset_receiver=Txn.sender,
            asset_amount=coverage_price
        ).submit()

        self.policy_type = policy_type
        self.paid = True

    # submit entry to make claim
    @arc4.abimethod
    def make_claim(self, farmer_address: str, claim_id: str, claim_details: str) -> None:
        assert encoding.is_valid_address(farmer_address), "The address is invalid." # type: ignore
        assert Txn.sender == farmer_address
        claims = self.state['claims']
        assert claim_id not in claims, "A claim with this ID already exists."
        assert self.paid == True, "The premium must be paid before making a claim."
        claims[claim_id] = {
            'farmer_address': farmer_address,
            'claim_details': claim_details,
            'status': 'pending',
            'date_submitted': Global.latest_timestamp
        }

    # claim rejection
    @arc4.abimethod
    def reject_claim(self, farmer_address: str, claim_id: str) -> None:
        assert encoding.is_valid_address(farmer_address), "The address is invalid." # type: ignore
        assert Txn.sender == Global.creator_address
        claims = self.state['claims']
        assert claim_id in claims, "The claim does not exist."
        assert claims[claim_id]['farmer_address'] == farmer_address, "The claim was not made by this farmer."
        assert claims[claim_id]['status'] == 'pending', "The claim is not pending."
        claims[claim_id]['status'] = 'rejected'

    # payout claim to farmer (approve the claim)
    @arc4.abimethod
    def payout_claim(self, farmer_address: str, claim_id: str, payout_amount: UInt64) -> None:
        assert encoding.is_valid_address(farmer_address), "The address is invalid." # type: ignore
        assert Txn.sender == Global.creator_address
        claims = self.state['claims']
        assert claim_id in claims, "The claim does not exist."
        assert claims[claim_id]['farmer_address'] == farmer_address, "The claim was not made by this farmer."
        assert claims[claim_id]['status'] == 'pending', "The claim has already been paid or rejected."
        assert payout_amount <= self.coverage_price, "The payout amount cannot exceed the coverage price."
        claims[claim_id]['status'] = 'paid'
        itxn.AssetTransfer(
            xfer_asset=self.policy_id,
            asset_receiver=farmer_address,
            asset_amount=payout_amount
        ).submit()
    
    # delete the application
    @arc4.abimethod(allow_actions=["DeleteApplication"])
    def deleteApplication(self) -> None:
        assert Txn.sender == Global.creator_address

        itxn.AssetTransfer(
            xfer_asset=self.policy_id,
            asset_receiver=Global.creator_address,
            asset_amount=0,
            asset_close_to=Global.creator_address
        ).submit()

        itxn.Payment(
            receiver=Global.creator_address,
            amount=0,
            close_remainder_to=Global.creator_address
        ).submit()
