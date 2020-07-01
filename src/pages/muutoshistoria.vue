<template>
  <Layout>
    <div class="article">
      <section class="header">
        <h1>Muutoshistoria</h1>
      </section>
      <section>
        <g-image src="~/assets/images/keyboard-1.jpg" alt="Näppäimistö" />
        <div class="content">
          <ul>
            <li> <strong>1.7.2020:</strong>
              <ul>
                <li> <g-link to="/2020/07/01/kalastusta-ja-luonnossa-liikkumista/">Kalastusta ja luonnossaliikkumista</g-link> -kirjoitus lisätty </li>
              </ul>
            </li>
            <li> <strong>4.5.2020:</strong>
              <ul>
                <li> <g-link to="/2020/05/04/pakollinen-koronapaeivitys/">Pakollinen koronapäivitys</g-link> -kirjoitus lisätty </li>
              </ul>
            </li>
            <li> <strong>5.3.2020:</strong>
              <ul>
                <li> RSS-syötteen URLit korjattu </li>
              </ul>
            </li>
            <li> <strong>4.3.2020:</strong>
              <ul>
                <li> Gridsome päivitetty versioon 0.7.13 </li>
              </ul>
            </li>
            <li> <strong>31.12.2019:</strong>
              <ul>
                <li> <g-link to="/2019/12/31/yhteenveto-vuodesta-2019-ja-suunnitelmia-vuodelle-2020/">Yhteenveto vuodesta 2019 ja suunnitelmia vuodelle 2020</g-link> -kirjoitus lisätty. </li>
                <li> Gridsome päivitetty versioon 0.7.12 </li>
              </ul>
            </li>
            <li> <strong>04.10.2018:</strong>
              <ul>
                <li> <g-link to="/2018/10/04/syyskuu-chillailtu">Syyskuu chillailtu</g-link> -kirjoitus lisätty.</li>
              </ul>
            <li> <strong>27.9.2018:</strong>
              <ul>
                <li> Korjauksia ja mobiilioptimointia.</li>
              </ul>
            <li> <strong>26.9.2018:</strong>
              <ul>
                <li> Blogin ulkoasu muutettu. Vielä muutamia pieniä korjauksia jäi tehtäväksi tulevaisuuteen.</li>
              </ul>
            <li> <strong>5.3.2018:</strong>
              <ul>
                <li> <g-link to="/2018/03/05/tervahiihto-2018">Tervahiihto 2018</g-link> -kirjoitus lisätty</li>
                <li> Rikkinäisiä linkkejä korjailtu ja poisteltu kirjoituksista</li>
              </ul>
            <li> <strong>20.2.2018:</strong>
              <ul>
                <li> <g-link to="/2018/02/20/neljae-olutta-neljae-ruokalajia-neljae-nikkasen-valintaa">Neljä olutta / Neljä ruokalajia / Neljä Nikkasen valintaa</g-link> -kirjoitus lisätty</li>
              </ul>
            <li> <strong>28.12.2017:</strong>
              <ul>
                <li> <g-link to="/2017/12/28/joulun-viettoa-maalla">Joulun viettoa maalla</g-link> -kirjoitus lisätty</li>
              </ul>
            <li> <strong>8.12.2017:</strong>
              <ul>
                <li> <g-link to="/2017/12/08/somedietin-ensimmaeinen-repsahdus">Somedietin ensimmäinen repsahdus</g-link> -kirjoitus lisätty</li>
              </ul>
            <li> <strong>7.12.2017:</strong>
              <ul>
                <li> <g-link to="/2017/12/07/somekanavien-jaerjestely">Somekanavien järjestelyä</g-link> -kirjoitus lisätty</li>
              </ul>
            <li> <strong>27.11.2017:</strong>
              <ul>
                <li> AMP-tagien korjailuja muutamaan kirjoitukseen</li>
              </ul>
            <li> <strong>02.08.2017:</strong>
              <ul>
                <li> <g-link to="/2017/08/02/kesaen-maalailut">Kesän maalailut</g-link> -kirjoitus lisätty</li>
                <li> <g-link to="/2017/07/22/uudet-vaijerit-polkupyoeriin">Uudet vaijerit polkupyöriin</g-link> -kirjoituksen kategoria ja tagit korjattu</li>
                <li> <g-link to="https://disqus.com/">Disqus</g-link>-kommentointi lisätty kirjoitusten perään</li>
              </ul>
            <li> <strong>22.07.2017:</strong>
              <ul>
                <li> Muutamaan artikkeliin korjattu kuvien AMP-tagit</li>
                <li> <g-link to="/2017/07/22/uudet-vaijerit-polkupyoeriin">Uudet vaijerit polkupyöriin</g-link> -kirjoitus lisätty</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Sivuston muutoshistoria',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Blogiin tehdyt muutokset. Lähinnä vain omaa käyttöäni varten. Toivottavasti muistan pitää tätä ajantasalla. Muille tästä tuskin on iloa.'
        }
      ]
    }
  }
}
</script>
