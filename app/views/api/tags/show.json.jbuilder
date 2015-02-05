json.extract!(@tag, :id, :label)
json.notes do
  json.array!(@tag.notes) do |note|
    json.extract!(note, :id, :title, :body, :ord, :notebook_id)
  end
end
