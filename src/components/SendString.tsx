import * as React from "react";
import Loader from "../interfaces/loadToDb";

interface Iprops {
    text?: string;
}

class SendString extends React.Component<Iprops> implements Loader{

    public static defaultProps: Partial<Iprops> = {
        text: "",
    };

    private _resultText:string = "asdasd";

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <button onClick={() => { this.LoadData(this._resultText); }}>
                    {this.props.text}
                </button>
            </div>
        );
    }

    LoadData(data: any): void {
        console.log("I send sting");
        console.log(data)
    }

}

export default SendString;