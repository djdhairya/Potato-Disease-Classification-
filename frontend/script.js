function classifyImage() {
    var fileInput = document.getElementById('fileInput');
    var resultDiv = document.getElementById('result');

    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            // Simulated classification results (replace with actual results)
            var possibleResults = ['Healthy Potato', 'Late Blight', 'Early Blight'];
            var randomResult = possibleResults[Math.floor(Math.random() * possibleResults.length)];

            // Display image preview
            var imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
            imagePreview.style.display = 'block';

            resultDiv.textContent = "Classification Result: " + randomResult;
            resultDiv.classList.add('success');
            resultDiv.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        resultDiv.textContent = "Please upload an image.";
        resultDiv.classList.add('error');
        resultDiv.style.display = 'block';
    }
}
