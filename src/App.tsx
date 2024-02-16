import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="column">
      <h2>Type variants</h2>

      <div className="row">
        <div className="column">
          <h3>Primary</h3>
          <Button variant="primary">Button variant</Button>
          <Button variant="primary">Button variant</Button>
          <Button variant="primary">Button variant</Button>
          <Button disabled variant="primary">
            Button variant
          </Button>
          <Button variant="primary">Button variant</Button>
        </div>

        <div className="column">
          <h3>Default</h3>
          <Button variant="default">Button variant</Button>
          <Button variant="default">Button variant</Button>
          <Button variant="default">Button variant</Button>
          <Button disabled variant="default">
            Button variant
          </Button>
          <Button variant="default">Button variant</Button>
        </div>

        <div className="column">
          <h3>Outline</h3>
          <Button variant="outline">Button variant</Button>
          <Button variant="outline">Button variant</Button>
          <Button variant="outline">Button variant</Button>
          <Button disabled variant="outline">
            Button variant
          </Button>
          <Button variant="outline">Button variant</Button>
        </div>

        <div className="column">
          <h3>Destructive primary</h3>
          <Button variant="destructive-primary">Button variant</Button>
          <Button variant="destructive-primary">Button variant</Button>
          <Button variant="destructive-primary">Button variant</Button>
          <Button disabled variant="destructive-primary">
            Button variant
          </Button>
          <Button variant="destructive-primary">Button variant</Button>
        </div>

        <div className="column">
          <h3>Destructive outline</h3>
          <Button variant="destructive-outline">Button variant</Button>
          <Button variant="destructive-outline">Button variant</Button>
          <Button variant="destructive-outline">Button variant</Button>
          <Button disabled variant="destructive-outline">
            Button variant
          </Button>
          <Button variant="destructive-outline">Button variant</Button>
        </div>
      </div>

      <h2>Size variants</h2>

      <div className="row">
        <div className="column">
          <h3>Large</h3>
          <Button size="large" variant="primary">
            Button size primary
          </Button>
        </div>

        <div className="column">
          <h3>Medium</h3>
          <Button size="medium" variant="primary">
            Button size variant
          </Button>
        </div>

        <div className="column">
          <h3>Small</h3>
          <Button size="small" variant="primary">
            Button size variant
          </Button>
        </div>

        <div className="column">
          <h3>Narrow</h3>
          <Button size="narrow" variant="primary">
            Button size variant
          </Button>
        </div>
      </div>

      <h2>Shape variants</h2>

      <div className="row">
        <div className="column">
          <h3>Oval</h3>
          <Button shape="oval" variant="primary">
            Button shape variant
          </Button>
        </div>

        <div className="column">
          <h3>Rectangle</h3>
          <Button shape="rectangle" variant="primary">
            Button shape variant
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
