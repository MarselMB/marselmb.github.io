import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './shared/ui/Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-header-text">
          <div className="App-header-text-name">Буляккулов Марсель</div>
          <div className="App-header-text-city">г. Москва</div>
        </div>
      </header>

      <main className="App-main">
        <div>
          <h3>Цели</h3>

          <p>
            <ul>
              <li>Научиться продвинутым возможностям Redux, Redux-Saga, Redux-thunk</li>
              <li>Создавать SPA-приложения и оптимизировать их для production</li>
              <li>Изучить TypeScript: писать чистый и лаконичный код, применяя эту технологию</li>
              <li>Освоить интеграционные и юнит-тесты</li>
              <li>Изучить GraphQL, Apollo, Relay</li>
            </ul>

            <div>
              Также хочу узнать, как работает под капотом Webpack и Babel, освоить паттерны функционального
              программирования и научиться их применять в React
            </div>

            <div>
              <h3>Обо мне</h3>

              <p>
                Опыт в разработке - 1 год. За это время участвовал в разработке двух приложений цифровых двойников
                технических установок. Стек: React + TS, Redux, MaterialUI.
              </p>
            </div>
          </p>
        </div>
      </main>
      <Modal visible={true}>
        <div>
          <h3>Цели</h3>

          <p>
            <ul>
              <li>Научиться продвинутым возможностям Redux, Redux-Saga, Redux-thunk</li>
              <li>Создавать SPA-приложения и оптимизировать их для production</li>
              <li>Изучить TypeScript: писать чистый и лаконичный код, применяя эту технологию</li>
              <li>Освоить интеграционные и юнит-тесты</li>
              <li>Изучить GraphQL, Apollo, Relay</li>
            </ul>

            <div>
              Также хочу узнать, как работает под капотом Webpack и Babel, освоить паттерны функционального
              программирования и научиться их применять в React
            </div>

            <div>
              <h3>Обо мне</h3>

              <p>
                Опыт в разработке - 1 год. За это время участвовал в разработке двух приложений цифровых двойников
                технических установок. Стек: React + TS, Redux, MaterialUI.
              </p>
            </div>
          </p>

          <h3>Цели</h3>

          <p>
            <ul>
              <li>Научиться продвинутым возможностям Redux, Redux-Saga, Redux-thunk</li>
              <li>Создавать SPA-приложения и оптимизировать их для production</li>
              <li>Изучить TypeScript: писать чистый и лаконичный код, применяя эту технологию</li>
              <li>Освоить интеграционные и юнит-тесты</li>
              <li>Изучить GraphQL, Apollo, Relay</li>
            </ul>

            <div>
              Также хочу узнать, как работает под капотом Webpack и Babel, освоить паттерны функционального
              программирования и научиться их применять в React
            </div>

            <div>
              <h3>Обо мне</h3>

              <p>
                Опыт в разработке - 1 год. За это время участвовал в разработке двух приложений цифровых двойников
                технических установок. Стек: React + TS, Redux, MaterialUI.
              </p>
            </div>
          </p>

          <h3>Цели</h3>

          <p>
            <ul>
              <li>Научиться продвинутым возможностям Redux, Redux-Saga, Redux-thunk</li>
              <li>Создавать SPA-приложения и оптимизировать их для production</li>
              <li>Изучить TypeScript: писать чистый и лаконичный код, применяя эту технологию</li>
              <li>Освоить интеграционные и юнит-тесты</li>
              <li>Изучить GraphQL, Apollo, Relay</li>
            </ul>

            <div>
              Также хочу узнать, как работает под капотом Webpack и Babel, освоить паттерны функционального
              программирования и научиться их применять в React
            </div>

            <div>
              <h3>Обо мне</h3>

              <p>
                Опыт в разработке - 1 год. За это время участвовал в разработке двух приложений цифровых двойников
                технических установок. Стек: React + TS, Redux, MaterialUI.
              </p>
            </div>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
