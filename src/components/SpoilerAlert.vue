<template>
  <body>
  <div class="container mt-4 mb-5">
    <h1 class="text-center text-white p-2 mt-5">East Of Eden - Book Review </h1>
    <p class="text-white">
      «Cuando un niño comprende por primera vez a los adultos -es decir, cuando se abre paso por primera vez en su grave
      cabecita la idea de que los adultos no están dotados de una inteligencia divina, de que sus juicios no son siempre
      acertados,
      ni su pensamiento infalible, ni sus sentencias justas, su mundo se desmorona y la desolación se apodera de él.
      Los dioses han caído y ha desaparecido toda seguridad.
      Y además no caen un poquito, no, se destrozan y se hacen añicos, o bien se hunden en las profundidades del
      estiércol.
      Es una tarea fatigosa reconstruirlos; ya no vuelven a brillar jamás con su antiguo resplandor.
      Y el mundo infantil ya no vuelve a ser jamás un mundo seguro. Es una manera muy dolorosa de crecer.»
      <br>
      (Página 23)
    </p>

    <h2 class="pt-2 mt-5 text-white">Spoiler Alert!</h2>
    <h3 class="text-white">(Hover To Reveal)</h3>
    <p class="spoiler text-white">
      John Ernst Steinbeck Jr. (/ˈstaɪnbɛk/; February 27, 1902 – December 20, 1968) was an American author and the 1962
      Nobel Prize in Literature winner "for his realistic and imaginative writings, combining as they do sympathetic
      humor and keen social perception." He has been called "a giant of American letters."

      During his writing career, he authored 33 books, with one book coauthored alongside Edward Ricketts, including 16
      novels, six non-fiction books, and two collections of short stories. He is widely known for the comic novels
      Tortilla Flat (1935) and Cannery Row (1945), the multi-generation epic East of Eden (1952), and the novellas The
      Red Pony (1933) and Of Mice and Men (1937). The Pulitzer Prize–winning The Grapes of Wrath (1939) is considered
      Steinbeck's masterpiece and part of the American literary canon. In the first 75 years after it was published,
      it sold 14 million copies.

      Most of Steinbeck's work is set in central California, particularly in the Salinas Valley and the California Coast
      Ranges region. His works frequently explored the themes of fate and injustice, especially as applied to
      downtrodden or everyman protagonists.
    </p>

  </div>
  </body>
</template>

<script>
export default {
  name: "SpoilerAlert"
}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Oswald monospace;
  font-size: 18px;
  line-height: 150%;
}

.container {
    max-width: 700px;
}

.spoiler {
  color: transparent;
  background-position: right;
  background-size: 100%, 100%;
  background-image: linear-gradient(hsl(0, 0%, 80%), hsl(0,0%, 90%));
  display: inline;
  background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
}

h3 {
  font-size: 12px;
  font-weight: bold;
}

.spoiler:hover {
  color: #000;
  background-size: 0%, 100%;
}
</style>