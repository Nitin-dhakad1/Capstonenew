import styles from "./styles.module.css";
import img1 from "./103.png";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Schoolify</h1>
				<button className='navigation-button1'>Categories</button>
        		<div className='bar1'></div>
        		<button className='navigation-button2'>Community</button>
        		<div className='bar2'></div>
        		<button className='navigation-button3'>Create</button>
        		<div className='bar3'></div>
        		<button className='navigation-button4'>About us</button>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		<div className='screen'>
        <p className='para'>Work in progress!
        This website is still under progress. Come back later for more features. For any queries, please contact with the above</p>
         <img src ={img1} classname = 'img1'></img>
		</div>
	</div>
	);
};

export default Main;
