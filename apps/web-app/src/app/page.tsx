"use client"

import { useRouter } from "next/navigation"
import { Button } from "../components/ui/button"


export default function IdentitiesPage() {
    const router = useRouter()
   

    return (
        <>

        <h2>Welcome to the Anonymous complaints with Semaphore protocol</h2>
        <p>This project is a decentralized application (dApp) that allows citizens to report acts of corruption or irregularities completely anonymously and securely, using Zero-Knowledge Proof (ZKP) technology. Unlike traditional systems, which require trust in a central entity, this project guarantees anonymity through cryptography, eliminating the risk of retaliation.</p>
        <div className="divider" />
        <p className="text-top">What Is Semaphore?</p>
        <p>Semaphore is a zero-knowledge protocol that allows you to cast a message (for example, a vote or endorsement) as a provable group member without revealing your identity. Additionally, it provides a simple mechanism to prevent double-signaling. Use cases include private voting, whistleblowing, anonymous DAOs and mixers.</p>
        <div className="divider" />
        <p className="text-top">Features:</p>
        <ul>
            <li className="list-item">Create a Semaphore identity.</li>
            <li className="list-item">Add their Semaphore identity to a group (i.e. Merkle tree).</li>
            <li className="list-item">Send a verifiable, anonymous message (e.g a vote or endorsement).</li>
        </ul>
        <div className="divider" />
        <p className="text-top">How it works?</p>
        <p>Our app allows you to report acts of corruption completely anonymously. It works like an ultra-secure digital email system: when you file a report, the app generates a unique Secret Identity for you that only you know. Using this identity and your report, a Zero-Knowledge Proof (ZKP) is created, a mathematical certificate that proves you are a valid user without revealing your name or the content of your report. Finally, an external service sends this certificate to the blockchain, a public and immutable database. Your identity, the report, and the transaction remain completely separate, ensuring that your report is public and secure, while you remain anonymous.</p>
        <div className="divider" />


        <Button variant="default" onClick={() => router.push("/users")}>Create your Anonymous Complaints</Button>
            
        </>
    )
}
