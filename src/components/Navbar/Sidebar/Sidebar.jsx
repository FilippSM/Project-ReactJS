import s from './../Navbar.module.css';

const Sidebar = () => {
    return <div className={s.sidebar}>
        <h3>Friends</h3>
        <div>
            <div>
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"/>
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar;