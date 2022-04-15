import "./App.scss";
import ThemeButton from "./components/ThemeButton";
import PatikaLogo from "./constants/PatikaLogo";

import SignUpForm from "./components/SignUpForm/";
function App() {
  return (
    <div className="app">
      <div className="patikasection">
        <div className="patikalogo">
          <PatikaLogo />
        </div>
        <div className="patikatexts">
          <h1>YAZILIM PATİKALARI</h1>
          <p>
            Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
            eğitim modelidir. Ekibini büyütmek isteyen şirketler bir
            bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış
            ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar.
            Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul
            alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya
            da sektörde başka şirketlere işe yerleşirler.
          </p>
        </div>
        <div className="unions">
          <div className="unionone"></div>

          <div className="uniontwo"></div>
        </div>
      </div>

      <section className="registersection">
        <div className="heading">
          <h1>Kayıt</h1>
        </div>
        <div>
          <SignUpForm />
        </div>
        <div className="themeChange">
          <ThemeButton />
        </div>
      </section>
    </div>
  );
}

export default App;
