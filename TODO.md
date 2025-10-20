# TODO

- [x] Install `multer` in the `server` directory.
- [x] Configure the server (`server/index.js`):
    - [x] Create a directory (e.g., `uploads`) to store the audio files.
    - [x] Configure `multer` to handle file uploads.
    - [x] Serve the `uploads` directory statically.
    - [x] Comment out environment variable validation.
- [x] Update the contact route (`server/routes/contact.js`):
    - [x] Use `multer` middleware in the `/contact` route.
    - [x] Extract the audio file path.
    - [x] Include the audio file path in the message sent via WhatsApp.
    - [x] Comment out Twilio-related code.
- [x] Update the Contact form (`src/pages/Contact.tsx`):
    - [x] Modify the form submission logic to include the audio file data.
- [x] Install axios
