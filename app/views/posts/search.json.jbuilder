json.array! @users do |user|
  json.id user.id
  json.name user.name
  json.image user.image.url
end
