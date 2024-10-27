// src/api/api.js
export const uploadFile = async (file, reportType) => {
  const formData = new FormData();
  formData.append('file', file);

  // Set the URL based on the reportType
  let url;
  switch (reportType) {
    case 'blood':
      url = 'http://127.0.0.1:5000/blood-test/pdf-analysis';
      break;
    case 'urine':
      url = 'http://127.0.0.1:5000/urine-test/pdf-analysis';
      break;
    case 'liver':
      url = 'http://127.0.0.1:5000/liver-test/pdf-analysis';
      break;
    case 'mri':
      url = 'http://127.0.0.1:5000/mri-scan/img-analysis';
      break;
    default:
      throw new Error('Invalid report type');
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('File upload failed');
    }

    const data = await response.json();
    console.log('File upload successful:', data);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
