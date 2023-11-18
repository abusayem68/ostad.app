import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/database',
});

export async function getWorkList() {
  let res = await axiosInstance.get('/data.json');
  if (res.status === 200 && res?.data?.workList) {
    return res.data.workList;
  } else {
    return [];
  }
}
export async function getFeaturedProducts() {
  let res = await axiosInstance.get('/data.json');
  if (res.status === 200 && res?.data?.featuredProducts) {
    return res.data.featuredProducts;
  } else {
    return [];
  }
}
export async function getCounters() {
  let res = await axiosInstance.get('/data.json');
  if (res.status === 200 && res?.data?.counters) {
    return res.data.counters;
  } else {
    return [];
  }
}
export async function getTeamMembers() {
  let res = await axiosInstance.get('/data.json');
  if (res.status === 200 && res?.data?.teamMembers) {
    return res.data.teamMembers;
  } else {
    return [];
  }
}
export async function getServices() {
  let res = await axiosInstance.get('/data.json');
  if (res.status === 200 && res?.data?.services) {
    return res.data.services;
  } else {
    return [];
  }
}
export async function getProjects() {
  let res = await axiosInstance.get('/data.json');
  if (res.status === 200 && res?.data?.projects) {
    return res.data.projects;
  } else {
    return [];
  }
}
export async function getTestimonials() {
  let res = await axiosInstance.get('/data.json');
  if (res.status === 200 && res?.data?.testimonials) {
    return res.data.testimonials;
  } else {
    return [];
  }
}
