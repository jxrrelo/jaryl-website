import './ProfilePhoto.css';
import { Link } from "react-scroll";
import { useState, Component } from "react";

class ProfilePhoto extends Component {
    render() {
        return (
            <div className="display-picture">
                <img
                    src={require('./dp.png')}
                    style={{
                        borderRadius: "50%",
                        width: 400,
                        height: 400
                    }}
                />
            </div>
        );
    }
    
}

export default ProfilePhoto;
