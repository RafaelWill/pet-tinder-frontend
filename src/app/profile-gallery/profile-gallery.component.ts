import { Component, OnInit } from '@angular/core';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/Pet';
import {FormBuilder} from '@angular/forms';
import {Kind} from '../model/Kind';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _pets: Pet[] = [];
  // tslint:disable-next-line:variable-name
  private _kinds: Kind[] = [];
  // tslint:disable-next-line:variable-name
  private _selectedPet: Pet;
  // tslint:disable-next-line:variable-name
  public _searchText: string;

  createPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: 0
  });

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
    this._searchText = '';
  }

  ngOnInit(): void {
    this.getPets();
    this.getAllKinds();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this._pets = pets);
  }

  getAllKinds(): void {
    this.petService.getAllKinds().subscribe(kinds => this._kinds = kinds);
  }

  // tslint:disable-next-line:typedef
  addPet() {
    // @ts-ignore
    this.petService.addPet(this.createPetForm.value).subscribe(() => this.getPets());
  }

  get pets(): Pet[] {
    return this._pets;
  }

  get kinds(): Kind[] {
    return this._kinds;
  }

  get selectedPet(): Pet {
    return this._selectedPet;
  }

// tslint:disable-next-line:typedef
  selectPet(selectedPet: Pet) {
    this._selectedPet = selectedPet;
  }

  // tslint:disable-next-line:typedef
  deletePetById(id: number) {
    this.petService.deletePetById(id).subscribe(() => this.getPets());
    this._selectedPet = null;
  }
}
