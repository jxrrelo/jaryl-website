import './Posts.css';
import { Link as RouterLink } from "react-router-dom";
import { useEffect, Component } from "react";

const Posts = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div className="posts-container">
            <section id="posts">
                <p className="section-header">
                    Posts
                </p>
            </section>
            <div className="post-card-list">
                <div className="post-card">
                    <div className="post-date">
                        22 APR 2023
                    </div>
                    <div className="post-title">
                        <RouterLink to="/posts/hackpack-ctf-2023">
                            Hackpack CTF 2023
                        </RouterLink>
                    </div>
                </div>
                <div className="post-card">
                    <div className="post-date">
                        22 APR 2023
                    </div>
                    <div className="post-title">
                        <RouterLink to="/posts/writeup-sample-1">
                            Writeup Sample 1
                        </RouterLink>
                    </div>
                </div>
                <div className="post-card">
                    <div className="post-date">
                        22 APR 2023
                    </div>
                    <div className="post-title">
                        <RouterLink to="/posts/writeup-sample-2">
                            Writeup Sample 2
                        </RouterLink>
                    </div>
                </div>
                <div className="post-card">
                    <div className="post-date">
                        22 APR 2023
                    </div>
                    <div className="post-title">
                        <RouterLink to="/posts/writeup-sample-3">
                            Writeup Sample 3
                        </RouterLink>
                    </div>
                </div>
                <div className="post-card">
                    <div className="post-date">
                        22 APR 2023
                    </div>
                    <div className="post-title">
                        <RouterLink to="/posts/writeup-sample-4">
                            Writeup Sample 4
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div className="posts-footer">
                <RouterLink to="/posts/page2">
                    next &gt;
                </RouterLink>
            </div>
        </div>       
    );
}

export default Posts;