import "./App.css";
import { useState } from "react";

function App() {
  const [action, setState] = useState("menu");
  const [item, setItem] = useState("null");
  const handleshawarma = () => {
    if (action === "shawarma") {
      setState("menu");
    } else {
      setState("shawarma");
    }
    setItem("null");
  };
  
  const handleGrill = () => {
    if (action === "grill") {
      setState("menu");
    } else {
      setState("grill");
    }
    setItem("null");
  };
  
  const handleRice = () => {
    if (action === "fastfood") {
      setState("menu");
    } else {
      setState("fastfood");
    }
    setItem("null");
  };
  const handlenavigation = () => {
    if (action === "navigation") {
      setState("menu");
    } else {
      setState("navigation");
    }
    setItem("null");
  };
  const handlecontactus = () => {
    if (action === "contactus") {
      setState("menu");
    } else {
      setState("contactus");
    }
    setItem("null");
  };
  const handlemanchuria=()=>{
    if (item === "manchuria") {
      setItem("null");
    } else {
      setItem("manchuria");
    }
  }
  const handlenoodle=()=>{
    if (item === "Noodle") {
      setItem("null");
    } else {
      setItem("Noodle");
    }
  }
  const handlerice=()=>{
    if (item === "rice") {
      setItem("null");
    } else {
      setItem("rice");
    }
  }

  
  return (
    <div className="container">
      <div className="header">
        <h2 onClick={() => setState("menu")}>
          THE SHAWARMA SHACK{" "}
        </h2>
      </div>
      <div className="welcome">
        <h3>Welcome to TSS!</h3>
        <p>Where Every Bite is a Delightful Journey...</p>
      </div>
      <div className="block">
        {/* <h3 className="menuHeader" onClick={() => setState("menu")}>Our Menu</h3> */}

        <div className="menu">
          <div
            className="shawarma"
            onClick={handleshawarma}
          >
            <h3>Shawarma</h3>
          </div>
          {action === "shawarma" ? (
            <div className="shawarmaMenu">
              <table>
                <tr>
                  <td>
                    <p>Chicken Shawarma</p>
                  </td>
                  <td>99</td>
                </tr>
                
                <tr>
                  <td>
                    <p>TSS SP shawarma</p>
                  </td>
                  <td>129</td>
                </tr>

                <tr>
                  <td>
                    <p>Lays Shawarma</p>
                  </td>
                  <td>119</td>
                </tr>

                <tr>
                  <td>
                    <p>Lemon Shawarma</p>
                  </td>
                  <td>119</td>
                </tr>

                <tr>
                  <td>
                    <p>Plate Shawarma</p>
                  </td>
                  <td>119</td>
                </tr>

                <tr>
                  <td>
                    <p>Salad shawarma</p>
                  </td>
                  <td>119</td>
                </tr>

                <tr>
                  <td>
                    <p>TSS JUMBO shawarma</p>
                  </td>
                  <td>149</td>
                </tr>
                <tr>
                  <td>
                    <p>Chicken Shawarma 2+1</p>
                  </td>
                  <td>249</td>
                </tr>
                <tr>
                  <td>
                    <p>TSS SP Shawarma 2+1</p>
                  </td>
                  <td>329</td>
                </tr>
              </table>
            </div>
          ) : null}

          <div
            className="grill"
            onClick={handleGrill}
          >
            <h3>Grill Chicken</h3>
          </div>
          {action === "grill" ? (
            <div className="shawarmaMenu">
              <table>
                <tr>
                  <th><p>Item</p></th>
                  <th><p>Half</p></th>
                  <th><p>Full</p></th>

                </tr>
                <tr>
                  <td>
                    <p>Hot n Spicy</p>
                  </td>
                  <td>219</td>
                  <td>399</td>
                </tr>
                <tr>
                  <td>
                    <p>Peri Peri</p>
                  </td>
                  <td>219</td>
                  <td>399</td>
                </tr>

                <tr>
                  <td>
                    <p>SP afgani</p>
                  </td>
                  <td>239</td>
                  <td>439</td>
                </tr>


              </table>
            </div>
          ) : (
            <div></div>
          )}
          <div
            className="fastfood"
            onClick={handleRice}
          >
            <h3>Fast Foods</h3>
          </div>
          {action === "fastfood" ? (
            <div className="fastfoodblock">
              <div className="manchuria" onClick={handlemanchuria}>
                <h3>Manchuria</h3>
              </div>
              {item === "manchuria" ? (
                <div className="fastfoodmenu">
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Single</th>
                      <th>1/2</th>
                    </tr>
                    <tr>
                      <td>
                        <p>Veg Manchuria</p>
                      </td>
                      <td>59</td>
                      <td>89</td>
                    </tr>
                    <tr>
                      <td>
                        <p>Egg Manchuria</p>
                      </td>
                      <td>69</td>
                      <td>99</td>
                    </tr>

                    <tr>
                      <td>
                        <p>2xEgg Manchuria</p>
                      </td>
                      <td>79</td>
                      <td>119</td>
                    </tr>

                    <tr>
                      <td>
                        <p>Chicken Manchuria</p>
                      </td>
                      <td>99</td>
                      <td>169</td>
                    </tr>

                    <tr>
                      <td>
                        <p>2xEgg Chicken Manchuria</p>
                      </td>
                      <td>119</td>
                      <td>199</td>
                    </tr>

                  </table>
                </div>
              ) : null}

              <div className="Noodle" onClick={handlenoodle}>
                <h3>Noodles</h3>
              </div>
              {item === "Noodle" ? (
                <div className="fastfoodmenu">
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Single</th>
                      <th>1/2</th>
                    </tr>
                    <tr>
                      <td>
                        <p>Veg Noodles</p>
                      </td>
                      <td>59</td>
                      <td>89</td>
                    </tr>
                    <tr>
                      <td>
                        <p>Egg Noodles</p>
                      </td>
                      <td>69</td>
                      <td>99</td>
                    </tr>

                    <tr>
                      <td>
                        <p>2xEgg Noodles</p>
                      </td>
                      <td>79</td>
                      <td>119</td>
                    </tr>

                    <tr>
                      <td>
                        <p>Chicken Noodles</p>
                      </td>
                      <td>89</td>
                      <td>139</td>
                    </tr>

                    <tr>
                      <td>
                        <p>2xEgg Chicken Noodles</p>
                      </td>
                      <td>99</td>
                      <td>149</td>
                    </tr>

                  </table>
                </div>
              ) : (
                <div></div>
              )}
              <div className="rice" onClick={handlerice}>
                <h3>Spice Rice</h3>
              </div>
              {item === "rice" ? (
                <div className="fastfoodmenu">
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>Single</th>
                      <th>1/2</th>
                    </tr>
                    <tr>
                      <td>
                        <p>Veg Fried Rice</p>
                      </td>
                      <td>59</td>
                      <td>89</td>
                    </tr>
                    <tr>
                      <td>
                        <p>Jeera Rice</p>
                      </td>
                      <td>59</td>
                      <td>89</td>
                    </tr>
                    <tr>
                      <td>
                        <p>Egg Fried Rice</p>
                      </td>
                      <td>69</td>
                      <td>99</td>
                    </tr>

                    <tr>
                      <td>
                        <p>2xEgg Fried Rice</p>
                      </td>
                      <td>79</td>
                      <td>119</td>
                    </tr>

                    <tr>
                      <td>
                        <p>Chicken Fried Rice</p>
                      </td>
                      <td>89</td>
                      <td>139</td>
                    </tr>

                    <tr>
                      <td>
                        <p>2xEgg Chicken Fried Rice</p>
                      </td>
                      <td>99</td>
                      <td>149</td>
                    </tr>

                  </table>
                </div>
              ) : (
                <div></div>
              )}
              {item === "null" ? <div></div> : <div></div>}
            </div>
          ) : (
            <div></div>
          )}

          <div className="beverages" onClick={() => setState("beverages")}>
            <h3>Beverages</h3>
          </div>
          <div className="navigation" onClick={handlenavigation}
          >
            <h3><i class='bx bxs-navigation'></i> Navigate</h3>
          </div>
          {action === "navigation" ? (
            <div className="navmap">
              <a href="https://maps.app.goo.gl/mUqA1uYHYZfQtiYw9" >
              <img src="gmaptss.png" alt="" /></a>
            </div>
          ) : null}
          <div className="contactus" onClick={handlecontactus}>
          
            <h3><i class='bx bxs-phone'></i> Contact Us</h3>
          </div>
          {action === "contactus" ? (
            <div className="contactMenu">
              <a href="mailto:cc.tss.vja@gmail.com?subject=Hello%20Tss.">Email Us</a>
              <a href="tel:+919030122537">Call Us</a>



            </div>
          ) : null}
        </div>
        <div className="bottom">

          
          <p>Indulge in the finest culinary experiences, crafted with passion and served with love. Whether you're craving a savory shawarma, a sizzling grill, or a quick bite of fast food, we promise to tantalize your taste buds with every bite. Join us for a memorable dining experience, where great food and warm hospitality come together.</p>

          </div>

          <div className="footer">
            <p>© 2024 The Shawarma Shack.<br/> All rights reserved.</p>
          </div>
        </div>

      </div>
  );
}

export default App;
