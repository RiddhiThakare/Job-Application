function submitForm() {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        date: document.getElementById('date').value,
        jobRole: document.getElementById('jobRole').value,
        pincode: document.getElementById('pincode').value,
        cv: document.getElementById('cv').value,
    };

    console.log(formData);

    // Reset the form (optional)
    document.getElementById('jobApplicationForm').reset();
}