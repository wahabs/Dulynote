json.extract!(@note, :id, :title, :body, :notebook_id)
json.tags do
  json.array!(@note.tags) do |tag|
    json.extract!(tag, :id, :label)
  end
end
