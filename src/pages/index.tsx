import { FC } from 'react';
import Blink from 'next/link';

const Link: FC<{ href: string }> = (props) => {
  return (
    <Blink {...props}>
      <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-starwars text-white">
        {props.children}
      </a>
    </Blink>
  );
};

export default function index() {
  return (
    <>
      <ul className="px-1 pt-6 overflow-y-auto font-medium text-lg sm:px-3 xl:px-5 lg:text-sm pb-10">
        <li className="mt-4">
          <ul>
            <li>
              <Link href="00-empty">Étape 0: application vide</Link>
            </li>
            <li>
              <Link href="01-with-data">{'Étape 1: récupérer des données avec l\'API'}</Link>
            </li>
            <li>
              <Link href="02-with-ts">
              Étape 2: vérifier la manipulation des données avec TypeScript
              </Link>
            </li>
            <li>
              <Link href="03-with-ts-generated">
                Étape 3: vérifier la manipulation des données avec TypeScript de manière automatique
              </Link>
            </li>
            <li>
              <Link href="04-with-fragment">Étape 4: définir un ensemble de données à requêter avec les fragments</Link>
            </li>
            <li>
              <Link href="05-with-multiple-queries">
              Étape 5: ajouter des pages et des requêtes
              </Link>
            </li>
            <li>
              <Link href="05-with-multiple-queries">
              Étape 6: utiliser les variables pour rendre dynamique les requêtes
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
