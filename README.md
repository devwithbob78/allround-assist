# AllRound Assist — Website files

A responsive static website for personal and home services. Built with HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — all page sections and booking form
- `styles.css` — responsive styling
- `script.js` — mobile menu and booking form helpers

## Before deploying: connect the free email form
The booking form currently contains a placeholder Formspree endpoint:
`https://formspree.io/f/YOUR_FORMSPREE_ID`

1. Create a free account at https://formspree.io/
2. Create a new form and set the recipient email to `boboscar7854@gmail.com`
3. Copy the Form ID Formspree provides.
4. Open `index.html` in GitHub's web editor (or use GitHub's upload/edit feature).
5. Find `YOUR_FORMSPREE_ID` and replace it with your actual ID.
6. Save the file. Formspree may ask you to confirm the recipient email.

The website cannot deliver bookings until this form ID is configured.

## Deploy on GitHub Pages using your phone
1. Sign in to https://github.com/devwithbob
2. Create a new public repository named `allround-assist`
3. Upload `index.html`, `styles.css`, `script.js`, and `README.md` from this ZIP (upload the files, not the ZIP itself).
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main**, folder **/(root)**, then Save.
7. Wait a few minutes. Your site should be available at:
   https://devwithbob.github.io/allround-assist/

## Important before taking real bookings
- These are suggested introductory prices in USD, based on a general US market assumption. Adjust to your area and actual costs before publishing.
- Massage therapy and electrical work may require appropriate licenses, certifications, insurance, or permits depending on location. Only advertise/perform services you are legally qualified and insured to provide.
- Home cleaning price depends on home size and scope; listed price is a starting estimate.
- Service requests are inquiries, not confirmed appointments.
- Unsplash images load from the internet; visitors need connectivity.


## Update note
This fixed package corrects the mobile navigation JavaScript and replaces the Home Cleaning photo with an alternate Unsplash image URL. Upload the updated `index.html` and `script.js` (and keep `styles.css`) to your existing repository.
