
function Header() {
  return (
    <>
      <header>
        <div className="header-area">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="/assets/img/logo/Grape Detection System (500 × 200 px) (500 × 130 px).png"
                        style={{ height: "60px" }}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="#detect">detect</a>
                          </li>
                          <li>
                            <a href="#benefits">Benefits</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-right-btn f-right d-none d-lg-block ml-15">
                      <a href="#" className="btn header-btn">
                        Grape Detection System
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
