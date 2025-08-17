export default function AboutPage() {
    return (
      <>
  
        {/* Hero Section */}
        <section
          id="home"
          className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-gray-50"
        >
          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[rgb(55,76,144)] mb-4">
              MISSION
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
              子ども達には無限の可能性があります。
  
              そんな子ども達が持つ可能性を引き出すべく、
  
              子ども達一人一人がサッカーに本気で向き合い
  
              ピッチで戦うための武器と将来の夢を明確に
  
              持つ事の出来る選手の育成を目指します。
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/coaches.jpeg"
              alt="Profile Picture"
              className="w-150 h-64 sm:w-130 sm:h-80 bg-gray-300 object-cover"
            />
          </div>
        </section>
  
        {/* About Us Section */}
        <section
          id="about"
          className="px-6 sm:px-10 md:px-16 py-12 bg-gray-50"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[rgb(55,76,144)]">
            About Us
          </h2>
          <p className="text-lg sm:text-xl font-medium text-gray-800">
            ARMAはスペイン語で”武器”という意味です。
  
            これは子ども達それぞれの武器を持って
  
            欲しいという願いから来ています。
  
            最後についているERは武器になるのではなく
  
            武器をもつ”人”になってほしいという願い
  
            そして、夢を追いかける、DREAMER から
  
            ER を取っています。
  
            これらから  ”ARMAER”と名付けました。
          </p>
        </section>
  
        {/* Services Section */}
        <section
          id="services"
          className="px-6 sm:px-10 md:px-16 py-12 bg-gray-50"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[rgb(55,76,144)]">
            育成について
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <i className="fas fa-user-friends text-black text-3xl mb-4"></i>
              <h3 className="text-black text-2xl font-semibold mb-2">
                人間性
              </h3>
              <p className="text-gray-800 text-base">
                人としての育成の部分においては
  
                「感謝」と「リスペクト」を持てる
  
                又、人として自立をし、何か起こった時に
  
                すぐに周りの大人に頼るのではなく
  
                自分自身や、仲間で解決していける
  
                「自立性」「人間性」を育てていきます。
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <i className="fas fa-futbol text-black text-3xl mb-4"></i>
              <h3 className="text-black text-2xl font-semibold mb-2">
                スキル
              </h3>
              <p className="text-gray-800 text-base">
                サッカー選手を支えている４つの柱
  
                ｛ 技術 / フィジカル / 戦術理解 / メンタル ｝
  
                を軸にトレーニングを行っていきます。
  
                「今の成長」はもちろん「未来での活躍」
  
                に目を向け「止める」「蹴る」「運ぶ」
  
                といった基礎的な技術から
  
                ポゼッション、試合で起こる場面を
  
                リアルにトレーニングしていきます。
  
                選手たち1人1人が目指すところでプレー
  
                できるようにサッカー選手としての基礎を
  
                築き上げる育成を行います。
              </p>
            </div>
          </div>
        </section>
  
        <section className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-12 bg-gray-50 text-black text-center">
  <h2 className="text-3xl font-semibold mb-4">Soccer School</h2>
  <p className="text-gray-800 max-w-2xl">
    サッカーのピッチで自分だけの武器と
    明確な将来の夢を持てるサッカー選手の育成
  </p>

  <h3 className="text-2xl font-semibold mt-6">営業時間</h3>
  <p className="text-gray-800">毎週月曜日～金曜日 午前9：00～午後17：00</p>

  <h3 className="text-2xl font-semibold mt-6">連絡先</h3>
  <p className="text-gray-800">armaerfa@gmail.com</p>
</section>

  
      </>
    );
  }
  