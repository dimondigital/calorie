import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FitnessDay} from "../model/fitness-day.model";
import {Location} from "@angular/common";
import {Store} from "@ngrx/store";
import {addMeal} from "../store/meal/meal.actions";
import {MealsState} from "../store/meal/meal.reducer";

@Component({
  selector: 'app-page-meal',
  templateUrl: './page-meal.component.html',
  styleUrls: ['./page-meal.component.scss']
})
export class PageMealComponent implements OnInit {

  public currentDay: FitnessDay;
  public currentTime: string;
  public mealForm: FormGroup;

  constructor(
    private store: Store<MealsState>,
    private fb: FormBuilder,
    public location: Location
  ) {
  }

  ngOnInit(): void {
    //@ts-ignore
    this.currentDay = this.location.getState().currentDay;
    //@ts-ignore set same date with correct hours
    this.currentTime = new Date(this.currentDay.date.setHours(this.location.getState().time.hours));
    this.initForm();
  }

  private initForm(): void {
    this.mealForm = this.fb.group({
      title: [''],
      kcal: [],
      fats: [],
      proteins: [],
      carbohydrates: [],
    });
  }

  public onSubmit(): void {
    console.log(this.mealForm.value);
    this.store.dispatch(addMeal({payload: {meal: this.mealForm.value}}));
  }

}
