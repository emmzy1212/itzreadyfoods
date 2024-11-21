 const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Gather form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        // Send form data to the backend API
        try {
            const response = await fetch('http://localhost:5000/api/forms/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Send the data as JSON
            });

            const result = await response.json();

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('There was an error submitting the form.');
        }
    });
