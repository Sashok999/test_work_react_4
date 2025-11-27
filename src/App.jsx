'use client';

import React, { useState } from 'react';

export default function App() {
    const [favorites, setFavorites] = useState([]);

    const movies = [
        { id: 1, title: 'Побег из Шоушенка', year: 1994, genre: 'Драма' },
        { id: 2, title: 'Криминальное чтиво', year: 1994, genre: 'Криминал' },
        { id: 3, title: 'Форрест Гамп', year: 1994, genre: 'Драма, Комедия' },
        { id: 4, title: 'Начало', year: 2010, genre: 'Фантастика' },
        { id: 5, title: 'Интерстеллар', year: 2014, genre: 'Фантастика' },
        { id: 6, title: 'Зелёная миля', year: 1999, genre: 'Драма' },
        { id: 7, title: 'Матрица', year: 1999, genre: 'Фантастика' },
        { id: 8, title: 'Бойцовский клуб', year: 1999, genre: 'Драма' },
        {
            id: 9,
            title: 'Властелин колец: Братство кольца',
            year: 2001,
            genre: 'Фэнтези',
        },
        { id: 10, title: 'Тёмный рыцарь', year: 2008, genre: 'Боевик' },
    ];

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const isFavorite = (id) => favorites.includes(id);

    return (
        <>
            <div className="min-h-screen bg-gray-100 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                        Мои фильмы
                    </h1>

                    <div className="grid gap-4 md:grid-cols-2">
                        {movies.map((movie) => (
                            <div
                                key={movie.id}
                                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow"
                            >
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {movie.title}
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        {movie.year} • {movie.genre}
                                    </p>
                                </div>

                                <button
                                    onClick={() => toggleFavorite(movie.id)}
                                    className={`p-3 rounded-full transition-all ${
                                        isFavorite(movie.id)
                                            ? 'bg-red-500 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                ></button>
                            </div>
                        ))}
                    </div>

                    {favorites.length > 0 && (
                        <div className="mt-10 bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                ❤️ Любимые фильмы ({favorites.length})
                            </h3>
                            <div className="space-y-2">
                                {movies
                                    .filter((m) => favorites.includes(m.id))
                                    .map((m) => (
                                        <div key={m.id} className="text-lg text-gray-700">
                                            • {m.title}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
