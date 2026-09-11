# 🌾 AgriFincaster
### Smart Farm Planning & Decision Support Platform
Developed by Vihaan ©


AgriFincaster is a full-stack agricultural planning platform designed to help farmers and local agricultural facilitators make better decisions using weather information, crop suitability analysis, production estimates, financial planning, historical records, and community-based resource exchange.

The platform brings multiple farm-planning tools into a single accessible interface and supports multiple Indian languages.

---

## ✨ Features

### 🌦 Weather & Farm Location
- Search and select an Indian farm location
- View weather information and forecasts
- Farm location is shared across relevant parts of the application
- Location data is stored per user rather than being carried between accounts

### 🌱 Crop Planning & Viability
- Select crop, season, land area, and location
- Checks whether a crop is suitable for the selected state and season
- Provides High, Moderate, or Low viability assessment
- High viability → production estimate shown
- Moderate viability → conservative/average estimate shown
- Low viability → production estimate intentionally withheld
- Prevents misleading estimates for unsuitable crop-region combinations

Example:

> Jute + Karnataka + Kharif → Low viability  
> Cotton + Karnataka + Kharif → High viability

### 📊 Production Estimation
- Uses agricultural yield information and crop suitability logic
- Supports regional production estimation
- Designed to integrate with an ML prediction backend
- Estimates can be saved as farm reports

### 💰 Farm Finance
Calculate:
- Expected revenue
- Total expenses
- Expected profit/loss
- Operating margin
- Break-even crop price

### 📑 Reports
- Save crop-planning estimates
- Review previous planning decisions
- Track crop, season, land area, location and estimated production
- User-specific report history

### 🔄 Farmer Barter Marketplace
A community exchange system specifically for agricultural tools, equipment and farming necessities.

Farmers can:
- Post what they have
- State what they need
- Add condition and location information
- Provide contact details
- Receive counter-offers
- Accept or decline barter proposals
- Close, reopen or delete their own requests
- View their own barter requests separately

Fresh produce is intentionally excluded from the marketplace concept.

Once an offer is accepted, the request becomes matched and is removed from the active public marketplace.

### 🔔 Notifications
- Receive notifications when another farmer makes a barter offer
- Accept or decline proposals
- Contact information is revealed to the matched parties after acceptance

### 🌐 Multilingual Interface
The interface supports:

- English
- Hindi
- Bengali
- Kannada
- Tamil
- Telugu
- Malayalam

### 🏛 Assisted Usage Model
AgriFincaster recognizes that not every farmer may be comfortable operating a digital planning platform independently.

The application is therefore also designed for assisted use by Panchayat officials, agricultural officers and local facilitators who can help farmers access digital planning tools.

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- React Router
- JavaScript
- CSS
- Lucide React

### Backend / Cloud
- Firebase Authentication
- Cloud Firestore

### Data & Analysis
- Historical agricultural data
- Crop-region-season suitability rules
- Yield-based production estimation
- Optional prediction API integration

---

## 🧠 Crop Viability Logic

AgriFincaster does not blindly calculate:

`land area × average yield`

Instead, crop suitability is evaluated before a production estimate is displayed.
It uses official government crop data from 1995 to 2023 as dataset, to standardize an evaluation.
Conceptually:

```text
Crop + State + Season
          ↓
   Viability Engine
          ↓
 ┌────────┼─────────┐
High   Moderate     Low
 ↓        ↓          ↓
Full   Average     No yield
estimate estimate   estimate
