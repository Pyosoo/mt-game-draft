## Scene Hierarchy
- App == SinglePageApp
  - View == VirtualPage == Form == Window
    - Text == Component == Control
    - Layout == Container
        - Custom == Component == Prefab(CompositeControl)
        - Button
    - Layout == Container
        - Image
        - TextInput

- Layout
  - Grid
  - Flex
  - Flow

- Popup
  - Dialog => Confirm(Ok/Cancel) Popup
  - Flyout => Floating Popup


## MVVM
> ![mvvm](https://docs.microsoft.com/ko-kr/xamarin/xamarin-forms/enterprise-application-patterns/mvvm-images/mvvm.png)

- View
  - is JSX Component
- ViewModl
  - is JS Class
  - has implements for Command
    - do business logic
    - use Recoil : useSetRecoilState
  - has bindable Data
    - use Recoil : atom, selector
  - has event delegate for callback when model has changed
  - 1:N for Model
- Model
  - is JS Class
  - as DAO
  - has Repository for Model

- Data Binding
  - use Recoil : useRecoilValue
- Command
  - is JS Class : extends ICommand
    - has Execute function
  - has handler function for business logic


## Todo
- [ ] models/user.ts 만들기
  - name, score
- [x] Intro.vm.ts 만들기
  - Command 구현
  - user 데이터용 바인더(recoilState) 구현
- [x] recoil 함수로 커스텀 훅 만들기
  - useRecoilValue -> binding
- [x] Intro.view에서 어떻게 ViewModel에 접근해야 하는가?
  - ViewModel 직접 import


## Note
- code formatting
  - npx prettier --write "**/*.{ts,tsx,css,scss}"
