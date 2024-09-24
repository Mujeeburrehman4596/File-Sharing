document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const files = fileInput.files;
        fileList.innerHTML = ''; // Clear existing file list

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileItem = document.createElement('div');
            fileItem.classList.add('col-md-3', 'file-item');
            fileItem.innerHTML = `
                <h5>${file.name}</h5>
                <p>Size: ${(file.size / 1024).toFixed(2)} KB</p>
                <a href="${URL.createObjectURL(file)}" download class="btn btn-info">Download</a>
            `;
            fileList.appendChild(fileItem);
        }
    });
});
