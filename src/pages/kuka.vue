<template>
  <Layout>
    <div class="article">
      <section class="header">
        <h1>Kuka on Jarkko Tervonen?</h1>
      </section>
      <section>
        <g-image src="~/assets/images/keyboard-1.jpg" alt="Näppäimistö" />
        <div class="content">
          <p>
            Olen Jarkko Tervonen. Syntynyt 1970-luvun lopulla Pieksämäellä ja tällä hetkellä asun Kempeleessä. Leipätyöt ja harrastukset pyörivät Internetin ympärillä. Ensimmäisen kerran surffailin netissä vuonna 1994 ja ensimmäiset kotisivuprojektit oli tulilla vuosi tämän jälkeen. Tämän jälkeen on tullut koodailtua nettiin vähän vaikka mitä.
          </p>
          <p>
            Muu vapaa-aika kuluu kuntoillen. Pääharrastuksina pyöräily, hiihtäminen sekä frisbeegolf. Lisäksi liikun ahkerasti luonnossa kameran kanssa ja välillä sudittelen siellä täällä RC-autollani. Kotona ollessa aikaa vierähtää autotallin puolella korjaten, kasaten tai muuten vain puuhastellen.
          </p>

          <h2>Näistä sivuista</h2>

          <p>
            Rekisteröin jarkkotervonen.com-domainin 2009 ja tarkoitus oli alkaa pitämään blogia aiheena webbi + musiikki. Postauksia tuli muutama, mutta hävitin ne laiskuuttani alkuvuodesta 2012, kun siirtelin sivustojani palvelimelta toiselle.
          </p>

          <h2>Miten yhteyttä?</h2>

          <p>
            Pistä mailia vaikka etunimi . sukunimi [at] gmail . com tai etsi puhelinnumerolla Whatsappista tai Telegramista.
          </p>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Kuka on Jarkko Tervonen?',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Jarkko Tervonen on webin monitoimimies, hiihtäjä, pyöräilijä, retkeilijä sekä paljon muuta touhuava myöhäisen 70-luvun tuotos.'
        }
      ]
    }
  }
}
</script>
