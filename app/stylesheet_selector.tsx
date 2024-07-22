'use client';

import React, { Component } from "react";

class StylesheetSelector extends Component {
    readonly stylesheets = ["global_theme", "global_theme_contrast", "global_theme_dark"];

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
                <div className="stylesheetSelectorWrapper">
                    <div className="stylesheetSelector">
                        <label htmlFor="stylesheet choice">&nbsp;Choose a Stylesheet: </label>
                        <input type="text" name="style" id="style" list="stylesheet" onChange={(e) => this.handleChange(e)} />
                        <datalist id="stylesheet">
                            {
                                this.stylesheets.map((item) => {
                                    return <option key={item} value={item}>{item}</option>;
                                })
                            }
                        </datalist>
                    </div>
                </div>
            </>
        )
    }
}

export default StylesheetSelector;