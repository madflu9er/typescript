import * as React from "react";
import loadToDb from "../interfaces/loadToDb";

interface Iprops {
    text?: string;
}

const dataObject: object = {
    "array": [
        1,
        2,
        3
    ],
    "boolean": true,
    "color": "#82b92c",
    "number": 123,
    "object": {
        "a": "b",
        "c": "d",
        "e": "f"
    },
    "string": "Hello World"
};

class ImplementButton extends React.Component<Iprops> implements loadToDb{

    public static defaultProps: Partial<Iprops> = {
      text: "",
    };

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
          <div>
              <button onClick={() => { this.LoadData(dataObject); }}>
                  {this.props.text}
              </button>
          </div>
        );
    }

    LoadData(data: any): void {
        console.log("i load json");
        console.log(data);
    }

}

export default ImplementButton;