from algopy import *


class FarmShield(ARC4Contract):
    policy_id: UInt64
    coverage_price: UInt64
    duration: UInt64
    paid_premiums: UInt64
    active: bool
    premium: UInt64

    # create application (INSTANTIATE INSURANCE POLICIES)
    @arc4.abimethod(allow_actions=["NoOp"], create="require")
    def createApplication(self, policy_id: Asset, coverage_price: UInt64, duration: UInt64) -> None:
        self.policy_id = policy_id.id
        self.coverage_price = coverage_price
        self.duration = duration

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

    # extend premium by farmer
    @arc4.abimethod
    def extend_premium(self, duration: UInt64) -> None:
        assert duration != UInt64(0)
        assert Txn.sender == Global.creator_address
        self.duration = duration

    # purchase premium by farmer
    @arc4.abimethod
    def purchase_premium(self, buyerTxn: gtxn.PaymentTransaction, coverage_price: UInt64) -> None:
        assert self.coverage_price != UInt64(0)
        assert Txn.sender == buyerTxn.sender
        assert buyerTxn.receiver == Global.current_application_address
        assert buyerTxn.amount == self.coverage_price

        itxn.AssetTransfer(
            xfer_asset=self.policy_id,
            asset_receiver=Txn.sender,
            asset_amount=coverage_price
        ).submit()

        assert Txn.sender == Global.creator_address
        self.coverage_price = coverage_price

    # claims submission

    # claim approval or rejection

    # payout claim to farmer

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
