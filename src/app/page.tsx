"use client"
import Header from "./Header";
import { useChainId, useAddress} from "@thirdweb-dev/react";

export default function Home() {
    
    const address = useAddress();
    const chainId = useChainId();
    
    console.log("👋Wallet Address: ", address);
    console.log("chainID:", chainId);
    
    // ウォレットと接続していなかったら接続を促す
    if (!address) {
        return (
            <div>
            <Header/>
            
            <div className="px-8">
            <main className="min-h-screen flex-1 flex flex-col items-center px-0 py-16">
            <h1 className="leading-[1.15] text-[4rem] m-0">
            🦍Welcome to Gorilla DAO!!
            </h1>
            <div className="w-[230px] mb-8">
            </div>
            </main>
            </div>
            </div>
            
            );
        }
        // テストネットが Sepolia ではなかった場合に警告を表示
        else if (address &&  chainId !== 11155111) {
            console.log("wallet address: ", address);
            console.log("chainID: ", chainId);
            return (
                <div>
                <Header/>
                <div className="px-8">
                <main className="min-h-screen flex-1 flex flex-col items-center px-0 py-16">
                <h1 className="leading-[1.15] text-[4rem] m-0">Sepolia に切り替えてください⚠️</h1>
                <br/>
                <p>この dApp は Sepolia テストネットのみで動作します。</p>
                <p>ウォレットから接続中のネットワークを切り替えてください。</p>
                </main>
                
                </div>
                </div>
                
                );
            }
            
        else {
            return (
                <div>
                <Header/>
                
                <div className="px-8">
                <main className="min-h-screen flex-1 flex flex-col items-center px-0 py-16">
                <h1 className="leading-[1.15] text-[4rem] m-0">
                🦍Welcome to Gorilla DAO!!
                </h1>
                <br/>
                <div className="w-[230px] mb-8">
                    <div> Sepolia OK</div>
                </div>
                </main>
                </div>
                </div>
                );
            }
}
            