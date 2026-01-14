import './headerNav.scss';

export default function HeaderNav(props) {
    return (
        <>
            <header>
                <div class="brand-row">
                    <div class="logo">
                        <div class="logo-mark">Wordable Menu</div>
                        <div class="logo-text">Its fancy!!</div>
                    </div>
                    <div class="header-meta">
                        
                            <span>about</span>
                            <span>tacos</span>
                        
                    </div>
                </div>
            </header>
        </>
    )
};