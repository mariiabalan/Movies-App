import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={s.homepage}>
      <div className={s.overlay}>
        <h1 className={s.welcometext}>Welcome to Your Digital Phone Book</h1>
      </div>
    </div>
  );
};
