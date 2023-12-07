import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeroHomeSlider from "../components/home-hero-slider/HeroHomeSlider";

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroHomeSlider />
        {/* About-2 Area Start  */}
        {/* =================== */}
        <div
          className="about-area2 section-padding40 wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 fadeIn" data-wow-delay="0.3s">
                <div className="about-img ">
                  <img src="assets/img/gallery/About_grape.png" alt="" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 fadeIn" data-wow-delay="0.4s">
                <div className="about-caption">
                  <div className="section-tittle mb-35">
                    <a id="benefits">
                      <h2>Benefits of Healthy Grapes Leaves:</h2>
                    </a>
                  </div>
                  <ul className="pera-bottom mb-30">
                    <ul>
                      <li>
                        <span className="font-weight-bold">
                          {" "}
                          Rich in Antioxidants:
                        </span>{" "}
                        Grapes are packed with antioxidants like flavonoids,
                        resveratrol, and quercetin, which help neutralize
                        harmful free radicals and protect cells from oxidative
                        damage.
                      </li>
                      <li>
                        {" "}
                        <span className="font-weight-bold">
                          Heart Health:
                        </span>{" "}
                        The high levels of polyphenols in grapes have been
                        linked to improved heart health by promoting healthy
                        blood circulation, reducing blood pressure, and
                        supporting overall cardiovascular function.
                      </li>
                      <li>
                        <span className="font-weight-bold">
                          Improved Immunity:
                        </span>{" "}
                        Grapes contain vitamin C and other immune-boosting
                        compounds that help strengthen the body's defense
                        system, making it more resistant to infections and
                        illnesses.
                      </li>
                      <li>
                        <span className="font-weight-bold">
                          Digestive Health:
                        </span>
                        Grapes are a good source of dietary fiber, which aids in
                        digestion, promotes regular bowel movements, and
                        supports a healthy gut microbiome.
                      </li>
                      <li>
                        <span className="font-weight-bold">
                          Cancer Prevention:
                        </span>
                        Some studies suggest that the antioxidants in grapes may
                        help reduce the risk of certain cancers by preventing
                        cellular damage and inhibiting the growth of cancerous
                        cells.
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================== */}
        {/* Services Area Start  */}
        {/* =================== */}
        <section
          className="wantToWork-area section-bg3 wow fadeInup"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="wants-wrapper w-padding2">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-7 col-lg-9 col-md-8">
                  <div className="wantToWork-caption wantToWork-caption2">
                    <h2>
                      Grapes Detection
                      <br />
                      System
                    </h2>
                    <p>
                      Detect Your Grapes
                      <br />
                      Disease
                    </p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                  <a href="#benefits" className="btn f-right sm-left">
                    Benifits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="service-area wow fadeIn"
          id="detect"
          data-wow-delay="0.5s"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="table">
                    <div className="table-cell">
                      <div className="modal">
                        <div id="profile">
                          <div className="dashes"></div>
                          <label id="dragLabel">
                            Click to browse or drag an image here
                          </label>
                        </div>
                        <div className="editable">
                          <i className="fa fa-pencil"></i>
                          <h1 id="imgUph1" contenteditable>
                            Upload Image
                          </h1>
                        </div>
                        <div className="stat">
                          <div className="label">Disease</div>
                          <div className="num">40</div>
                        </div>
                        <div className="stat">
                          <div className="label">Infection</div>
                          <div className="num">1</div>
                        </div>
                        <button>Upload Image</button>
                      </div>
                    </div>
                  </div>
                  <input type="file" id="mediaFile" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="table">
                    <div className="table-cell">
                      <div className="modal">
                        <div id="profile" className="profil">
                          <div className="dashes"></div>
                          <label id="dragLabel">
                            Click to browse or drag an image here
                          </label>
                        </div>
                        <div className="editable">
                          <i className="fa fa-pencil"></i>
                          <h1 id="imgUph1" contenteditable>
                            Image Resizing
                          </h1>
                        </div>
                        <div className="stat">
                          <div className="label">Disease</div>
                          <div className="num">40</div>
                        </div>
                        <div className="stat">
                          <div className="label">Infection</div>
                          <div className="num">1</div>
                        </div>
                        <button>Image Resizing</button>
                      </div>
                    </div>
                  </div>
                  <input type="file" id="mediaFilee" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="table">
                    <div className="table-cell">
                      <div className="modal">
                        <div id="profile" className="profi">
                          <div className="dashes"></div>
                          <label id="dragLabel">
                            Click to browse or drag an image here
                          </label>
                        </div>
                        <div className="editable">
                          <i className="fa fa-pencil"></i>
                          <h1 id="imgUph1" contenteditable>
                            Final Image
                          </h1>
                        </div>
                        <div className="stat">
                          <div className="label">Disease</div>
                          <div className="num">40</div>
                        </div>
                        <div className="stat">
                          <div className="label">Infection</div>
                          <div className="num">1</div>
                        </div>
                        <button>Final Image</button>
                      </div>
                    </div>
                  </div>
                  <input type="file" id="mediaFileee" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============== */}
        {/* Team Area Start */}
        {/* =============== */}
        <section className="team-area pb-top wow fadeIn" data-wow-delay="0.7s">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-cat text-center mb-30">
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team1.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="#">Your daily meal plan</a>
                    </h5>
                    <p>
                      Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                      dignissim dolor, a pretium mi sem ut ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-cat text-center mb-30">
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team2.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="#">Muscle Gain</a>
                    </h5>
                    <p>
                      Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                      dignissim dolor, a pretium mi sem ut ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-cat text-center mb-30">
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team3.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="#">Weight Loss</a>
                    </h5>
                    <p>
                      Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                      dignissim dolor, a pretium mi sem ut ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== */}
        {/* Grapes Disease Start */}
        {/* ===================== */}
        <div className="container mt-5 wow fadeInUp" data-wow-delay="0.6s">
          <div className="row">
            <div className="col-12">
              <div className="wantToWork-caption wantToWork-caption2">
                <h1 style={{ fontSize: "40px" }}>Diseases of Grapes</h1>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-6 text-center mx-auto d-flex justify-content-center wow fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="card" style={{ width: "44rem" }}>
                <img
                  src="assets/img/hero/blackrot.JPG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h1 className="card-title">Grape Black_rot</h1>
                  <p className="card-text">
                    Some quick example text to build on Some quick example text
                    to build on
                  </p>
                  <a href="#" className="btn btn-primary">
                    Grape Black_rot
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 text-center d-flex justify-content-center wow fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="card" style={{ width: "44rem" }}>
                <img
                  src="assets/img/hero/esca.JPG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h1 className="card-title">Grape Esca</h1>
                  <p className="card-text">
                    Some quick example text to build on Some quick example text
                    to build on
                  </p>
                  <a href="#" className="btn btn-primary">
                    Grape Esca
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-6 text-center mx-auto d-flex justify-content-center wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="card" style={{ width: "44rem" }}>
                <img
                  src="assets/img/hero/healthy.JPG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h1 className="card-title">Grape healthy</h1>
                  <p className="card-text">
                    Some quick example text to build on Some quick example text
                    to build on
                  </p>
                  <a href="#" className="btn btn-primary">
                    Grape healthy
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 text-center d-flex justify-content-center wow fadeIn"
              data-wow-delay="0.8s"
            >
              <div className="card" style={{ width: "44rem" }}>
                <img
                  src="assets/img/hero/leafblight.JPG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h1 className="card-title">Grape Leaf_blight</h1>
                  <p className="card-text">
                    Some quick example text to build on Some quick example text
                    to build on
                  </p>
                  <a href="#" className="btn btn-primary">
                    Grape Leaf_blight
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =================== */}
        {/* Grapes Disease End */}
        {/* =================== */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
