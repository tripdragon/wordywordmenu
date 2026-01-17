import './styles/headerNav.scss';

export default function HeaderNav(props) {
    return (
        <>
            <header>
                <div className="brand-row">
                    <div className="logo">
                        <div className="logo-mark">Wordable Menu</div>
                        <div className="logo-text">Its fancy!!</div>
                    </div>
                    <div className="header-meta">
                        
                            <span>about</span>
                            <span>tacos</span>
                        
                    </div>
                </div>
            </header>
        </>
    )
};