'use client';

import React, { Component } from "react";

class StylesheetSelector extends Component {
    readonly stylesheets = ["global", "global_theme_contrast", "global_theme_dark", "global_theme"];

    handleChange = (event) => {
        event.preventDefault();
        let inputValue = event.target.value;
        this.stylesheets.map((item) => {
            if (item === inputValue) {
                this.swapStylesheet(`/styles/${inputValue}.css`)
            }
        })
    };

    enableStylesheet(element) {
        element.media = '';
    }

    disableStylesheet(element) {
        element.media = 'none';
    }

    swapStylesheet(sheet) {
        let element = document.getElementById("pagestyle");
        element.setAttribute("href", sheet);
    }

    render() {
        return (
            <>
                <label htmlFor="stylesheet choice">&nbsp;Choose a Stylesheet: </label>
                <input type="text" name="style" id="style" list="stylesheet" onChange={(e) => this.handleChange(e)} />
                <datalist id="stylesheet">
                    {
                        this.stylesheets.map((item) => {
                            return <option key={item} value={item}>{item}</option>;
                        })
                    }
                </datalist>
                <footer>
                    <p>&nbsp;Change template by selecting view/page style in your browser.</p>
                    <br />
                </footer>
            </>
        )
    }
}

export default StylesheetSelector;