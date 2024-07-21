'use client';

import { debounce } from 'lodash';

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {

    const debounce_form_submit = debounce((event) => {
        // Get data from the form.
        const formData = {
            data: event.target.data.value
        };

        let JSONdata = '';
        // API endpoint where we send form data.
        const endpoint = '/api/form'
        JSONdata = JSON.stringify(formData);
        console.log(JSONdata);
        // Form the request for sending data to the server.
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata
        }

        // Send the form data to our forms API on Vercel and get a response.
        // const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        // const result = await response.json()
    }, 2000);

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        debounce_form_submit(event);
    }

    return (
        <>
            <div className="padding">
                <h1>Dashboard Page</h1>
                <div className="padding">
                    <form onSubmit={handleSubmit}>
                        <label>Enter Text:
                            <input id="data" type="text" />
                        </label>
                        <button type="submit">Submit</button>
                        <br /><br />
                        <hr />
                    </form>
                </div>
            </div>
        </>
    )

}