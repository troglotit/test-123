import * as React from "react";
import "./App.css";
import * as RR from "react-router-dom";

function Hamburger() {
  return (
    <span style={{ position: "absolute", marginTop: "-4px" }}>
      {[1, 2, 3].map((_) => (
        <div
          style={{
            width: 30,
            height: 4,
            borderRadius: "3.5px",
            backgroundColor: "#E8E5E5",
            margin: "6px 0",
          }}
        />
      ))}
    </span>
  );
}

function Page({ title, setOpenNav }) {
  return (
    <div
      style={{ lineHeight: "33px", fontSize: "24px", padding: "43px 0 0 36px" }}
    >
      <span style={{}} onClick={() => setOpenNav((prev) => !prev)}>
        <Hamburger />
      </span>
      <span
        style={{
          marginLeft: "65px",
          color: "#9F9FA0",
          textTransform: "uppercase",
          fontWeight: 500,
          letterSpacing: "5px",
        }}
      >
        {title}
      </span>
    </div>
  );
}

const routes = [
  {
    route: "/",
    title: "Start",
  },
  {
    route: "/cart",
    title: "Your Cart",
  },
  {
    route: "/favourites",
    title: "Favourites",
  },
  {
    route: "/orders",
    title: "Your Orders",
  },
];

function App() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <RR.BrowserRouter>
      <div style={{}}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine"
        />

        <div
          style={{
            position: "absolute",
            backgroundColor: "#1F1B33",
            borderRadius: "48px 0 0 0",
            height: "100vh",
            width: "100vw",
            padding: "122px 0 0 27px",
            color: "#fff",
            top: openNav ? "0" : "1px",
          }}
        >
          <div
            style={{
              padding: "0 0 0 31px",
              fontSize: "28px",
              lineHeight: "38px",
              fontWeight: 700,
            }}
          >
            Viktor
          </div>
          <div style={{ padding: "37px 0" }}>
            {routes.map(({ route, title }) => (
              <RR.NavLink
                key={route}
                onClick={() => setOpenNav(false)}
                to={route}
                style={{
                  display: "block",
                  color: "#fff",
                  width: 175,
                  height: 51,
                  borderRadius: "15.5px",
                  textDecoration: "none",
                  padding: "12px 0 0 30px",
                  fontSize: "20px",
                  lineHeight: "27px",
                  margin: "20px 0",
                }}
                activeStyle={{
                  color: "#FC8074",
                  backgroundColor: "rgba(252, 128, 116, 0.2)",
                }}
                exact
              >
                {title}
              </RR.NavLink>
            ))}
          </div>
          <div
            style={{
              width: 175,
              height: 1,
              backgroundColor: "#84818E",
            }}
          />
          <div
            style={{
              display: "block",
              color: "#fff",
              width: 175,
              height: 51,
              borderRadius: "15.5px",
              textDecoration: "none",
              padding: "12px 0 0 30px",
              fontSize: "20px",
              lineHeight: "27px",
              margin: "57px 0",
            }}
          >
            Sign Out
          </div>
        </div>

        <div
          style={{
            position: "relative",
            borderRadius: "48px 0 0 0",
            height: "100vh",
            width: "100vw",
            zIndex: "1",
            backgroundColor: "#fff",
            transform: openNav ? "translate(240px, 5px) rotate(-6deg)" : "",
          }}
        >
          <RR.Switch>
            {routes.map(({ route, title }) => (
              <RR.Route exact path={route} key={route}>
                <Page title={title} setOpenNav={setOpenNav} />
              </RR.Route>
            ))}
          </RR.Switch>
        </div>
      </div>
    </RR.BrowserRouter>
  );
}

export default App;
