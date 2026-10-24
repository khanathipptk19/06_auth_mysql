import Link from "next/link";

export default function Home() {
  return (
    <div className="auth-box">
      <h1>คณาธิป ปินตากุล</h1>
      <p className="subtitle">รหัสนักศึกษา: 6800735</p>

      <ul className="auth-nav">
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard (members only)</Link>
        </li>
      </ul>
    </div>
  );
}