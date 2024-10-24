// src/components/Home.tsx
import { useWallet } from '@txnlab/use-wallet'
import React, { useState } from 'react'
import AppCalls from './components/AppCalls'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal)
  }

  const toggleAppCallsModal = () => {
    setAppCallsDemoModal(!appCallsDemoModal)
  }

  return (
    <div className="min-h-screen bg-teal-400 hero">
      <div className="max-w-md p-6 mx-auto text-center bg-white rounded-lg hero-content">
        <div className="max-w-md">
          <h1 className="text-4xl">
            Welcome to <div className="font-bold">Farm Shield 🙂</div>
          </h1>
          <p className="py-6">
            This starter has been generated using official AlgoKit React template. Refer to the resource below for next steps.
          </p>

          <div className="grid">
            <a
              data-test-id="getting-started"
              className="m-2 btn btn-primary"
              target="_blank"
              href="https://github.com/algorandfoundation/algokit-cli"
            >
              Getting started
            </a>

            <div className="divider" />
            <button data-test-id="connect-wallet" className="m-2 btn" onClick={toggleWalletModal}>
              Wallet Connection
            </button>

            {activeAddress && (
              <button data-test-id="transactions-demo" className="m-2 btn" onClick={toggleDemoModal}>
                Transactions Demo
              </button>
            )}

            {activeAddress && (
              <button data-test-id="appcalls-demo" className="m-2 btn" onClick={toggleAppCallsModal}>
                Contract Interactions Demo
              </button>
            )}
          </div>

          <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
          <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
          <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
        </div>
      </div>
    </div>
  )
}

export default Home
