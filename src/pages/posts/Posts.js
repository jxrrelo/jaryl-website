import './Posts.css';
import { Component } from "react";

class Posts extends Component {
    render() {
        return (
            <div className="posts-container">
                <div className="post-card">
                    <div className="post-date">
                        22 APR 2023
                    </div>
                    <div className="post-title">
                        Hackpack CTF 2023
                    </div>
                </div>
            </div>       
        );
    }
}

export default Posts;