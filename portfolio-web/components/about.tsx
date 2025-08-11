export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">À propos</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Actuellement en Master à la Shibaura Institute of Technology à Tokyo, je me spécialise dans
                l'Intelligence Artificielle et la Data Science. Mon parcours m'a mené d'EPITA Paris aux laboratoires de
                recherche japonais, en passant par des stages chez ALTEN et Bandai Namco Europe.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Je développe des solutions IA innovantes, des modèles de deep learning multimodaux aux pipelines de
                données en temps réel. Ma passion pour la technologie s'étend également au développement de jeux vidéo
                et à la création de contenu multimédia.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Informations</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Localisation</span>
                  <span className="text-slate-900 font-medium">Tokyo, Japon</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Téléphone</span>
                  <span className="text-slate-900 font-medium">+33 7 82 22 25 34</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Email</span>
                  <span className="text-slate-900 font-medium">emon.sb@hotmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Langues</span>
                  <span className="text-slate-900 font-medium">FR, EN, JP, DE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
