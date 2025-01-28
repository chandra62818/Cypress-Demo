describe('File Usage Validation', function() {
    beforeEach(() => {
      cy.visit('https://qa-automation-practice.netlify.app/file-upload.html');
    });
  
    it('File Upload', () => {
      // File Upload
      cy.get('#file_upload').attachFile('Test.txt');
      cy.get('.btn.btn-primary').click();
      cy.get('#file_upload_response').contains('successfully uploaded');
    });
  
    it('File Download - jpg', () => {
      cy.downloadFile('https://automationexercise.com/static/images/home/girl2.jpg', 'myDownloads', 'Pic.jpg');
    });
  
    it('File Download - jpg', () => {
      cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','myDownloads','example.jpg');
    });
  });