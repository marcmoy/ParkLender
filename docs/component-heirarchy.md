## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/search" | "SearchContainer" |
| "/spots/:spotId" | "SpotsShowContainer" |
| "/users/:userId" | "UsersShowContainer" |
| "/users/:userId/spots/new" | "NewSpotContainer" |
| "/users/:userId/dashboard" | "DashboardContainer" |

## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - HomePageContainer
  - SearchBarContainer
  - WebsiteReviewsContainer
  - HowItWorksContainer
 - Navbar
 - Footer

**SearchContainer**
- FilterForm
- SpotsIndexContainer
  - SpotsIndex
  - SpotsIndexItem
- SpotsMap

**SpotShowContainer**
- SpotDetailContainer
  - SpotDetail
  - SpotPhotoContainer
    - SpotPhotoIndex
    - SpotPhotoIndexItem
  - MessageContainer
    - MessageButton
    - MessageFormContainer _(box modal/pop up box)_
      - MessageForm
      - MessageSubmitButton
- BookingFormContainer
  - BookingForm
    - BookingFormDates
    - BookingFormTimes
    - BookingFormButton
    - CountDown
- ReviewsIndexContainer _(infinite scroll)_
  - ReviewsIndex
  - ReviewsIndexItem
- ReviewFormContainer
  - ReviewForm
  - ReviewButton

**UsersShowContainer**
- UserDetailContainer
  - UserPhoto
  - MessageButton
  - ReviewButton
  - UserDetail
- UserReviewsContainer

**NewSpotContainer** _BONUS Feature_
- SpotsFormContainer
  1. LocationFormContainer _(Step 1)_
    - LocationForm
    - AddressInput
    - CityInput
    - StateInput
    - CountryInput
  2. DimensionFormContainer _(Step 2)_
    - DimensionForm
    - WidthInput
    - HeightInput
  3. VehiclesFormContainer _(Step 3)_
    - VehiclesForm
    - CarSelectButton
    - VanSelectButton _(also SUV)_
    - MotorcycleSelectButton
    - TruckSelectButton _(also RV)_
  4. AvailabilityFormContainer _(Step 4)_
    - AvailabilityForm
    - DatesFormContainer
      - DateForm
      - FromDate
      - UntilDate
      - AddDateRangeButton
      - RemoveDateButton
    - TimesFormContainer
      - StartTime
      - EndTime
      - AddTimeRangeButton
      - RemoveTimeButton
    - DaysFormContainer
      - DaySelectButton
  5. PriceFormContainer _(Step 5)_
    - PriceForm
    - HourlyRate
    - DailyRate
    - MonthlyRate
  6. UploadPhotosContainer _(Step 6)_
    - UploadPhotosForm
    - UploadPhotoDragDrop
    - UploadPhotoButton
    - PhotoContainer
      - PhotoIndex
      - PhotoIndexItem
      - MainPhoto
      - SubPhoto
  7. DescriptionFormContainer _(Step 7)_
    - DescriptionForm
    - TitleInput
    - TitleMaxCounter
    - DescriptionInput
    - DescriptionMaxCounter
  - ConfirmationContainer
    - SpotDetailContainer
    - ConfirmButton
- BackButton
- NextButton

**DashboardContainer**
- BookingsContainer
  - BookingIndex
  - BookingIndexItem
  - BookingDetail
- RequestContainer _Where hosts can approve/deny booking requests_
  - RequestIndex
  - RequestIndexItem
  - RequestDetail
- SettingsContainer _to be determined_
