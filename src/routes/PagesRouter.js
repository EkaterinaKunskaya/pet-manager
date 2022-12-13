import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageGeneral } from '../pages/PageGeneral';
import { PageAddPet } from '../pages/PageAddPet';
import { PagePetCard } from '../pages/PagePetCard';
import { PagePetEdit } from '../pages/PagePetEdit';


export const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageGeneral />} />
      <Route path="/add-pet" element={<PageAddPet />} />
      <Route path="/pet-card/:id" element={<PagePetCard />} />
      <Route path="/pet-card/:id/edit" element={<PagePetEdit />} />
    </Routes>
  );
};
