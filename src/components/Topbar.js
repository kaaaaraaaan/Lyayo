import React, { Component } from 'react'

export default class Topbar extends Component {
    render() {
        return ( 
            <div className="topBar my-3">
                <div className="centered"> 
                    <i class="material-icons">email</i>
                        <span>
                            <a href="mailto:lyayonepal@gmail.com">lyayonepal@gmail.com</a>
                        </span>
                    <i class="material-icons">call</i>
                        <span>
                            <a href="tel:+9779880302374">+9779880302374</a>
                        </span>
                    </div>
                </div>
        )
    }
}
