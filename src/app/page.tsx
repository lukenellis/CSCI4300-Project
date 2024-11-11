import Image from "next/image";
import styles from "./page.module.css";
import LoginLeft from "./components/LoginLeft";
import LoginForm from "./components/LoginForm";
import LoginPage from "./components/LoginPage"

export default function Home() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
