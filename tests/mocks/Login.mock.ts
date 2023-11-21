import { User, UserLogin } from "../../src/types/User"

export const validBodyLogin : UserLogin = {
  username: 'Hagar',
  password: 'terrível'
}

export const userFromDB : User = {
  id: 1,
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password: '$2a$10$s7FIrd61VFHuDYtqXkRtPes7qsPymUvewHXTl7QbEZRy5r7LtHsWW'
}